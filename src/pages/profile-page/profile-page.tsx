import { FC } from 'react';

import { ProfileInfo } from '../../components';
import { User } from '../../components/profile-info/type';

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
    <ProfileInfo {...mockUser} />
  </div>
);
