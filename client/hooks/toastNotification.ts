import { toast } from "react-toastify";

export const useNotify = (message: string) => toast(message);
