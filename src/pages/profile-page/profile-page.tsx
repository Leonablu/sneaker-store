import { FC } from 'react';
import { User } from '../../components/ui/profile-info/type';
import { ProfileInfoUI } from '../../components/ui/';

const mockUser: User = {
  lastName: '',
  firstName: '',
  middleName: '',
  region: '',
  city: '',
  street: '',
  house: '',
  building: '',
  apartment: '',
  index: '',
  email: '',
  phone: '',
  repeatPassword: '',
  oldPassword: '',
  newPassword: ''
};

export const ProfilePage: FC = () => (
  <div>
    <ProfileInfoUI {...mockUser} />
  </div>
);
