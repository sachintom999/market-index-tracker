// components/withAuth.js
import { useAuth } from '@/contexts/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


const withAuth = (WrappedComponent) => {
  return (props) => {
    const { currentUser } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!currentUser) {
        router.replace('/login');
      }
    }, [currentUser, router]);

    if (!currentUser) {
      return null; 
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
