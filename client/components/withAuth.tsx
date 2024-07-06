// components/withAuth.js
import { useAuth } from '@/contexts/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
// @ts-ignore
const withAuth = (WrappedComponent) => {
  // @ts-ignore
    const ComponentWithAuth = (props) => {
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

  // Set display name for debugging and error messages
  ComponentWithAuth.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return ComponentWithAuth;
};

export default withAuth;
