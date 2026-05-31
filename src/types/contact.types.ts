export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface FormState {
  status: "idle" | "submitting" | "success" | "error";
  message: string | null;
}