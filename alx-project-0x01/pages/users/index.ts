// interfaces/index.ts

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

// ✅ Define UserProps (based on JSONPlaceholder user data)
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

// ✅ Define UserData for modal input (no ID required at creation)
export interface UserData extends Omit<UserProps, 'id'> {}

// ✅ THIS is what your check is looking for 👇
export interface UserModalProps {
  onClose: () => void;
  onSubmit: (post: UserProps) => void;
}
