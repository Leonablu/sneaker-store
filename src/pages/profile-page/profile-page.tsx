import { FC } from 'react';
import { User } from '../../components/ui/profile-menu/type';
import { ProfileMenuUI } from '../../components/ui/';

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
    <ProfileMenuUI {...mockUser} />
  </div>
);
