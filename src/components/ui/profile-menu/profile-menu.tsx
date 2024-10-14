import { FC, memo } from 'react';
import { SubmitButton } from '../../ui-kit';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';
import styles from './profile-menu.module.scss';
import { User } from './type';

export const ProfileMenuUI: FC<User> = memo((user) => (
  <div className={styles.profileInfoContainer}>
    <form>
      <Grid className={styles.gridContainer}>
        <div style={{ gridArea: 'personalData' }}>
          <h1 className={styles.title}>Личные данные</h1>
          <TextField
            fullWidth
            label='Фамилия'
            defaultValue={user.lastName}
            variant='standard'
            className={`${styles.textField} ${styles.lastNameField}`}
            slotProps={{
              inputLabel: {
                sx: { color: '#B3C0D2' }
              }
            }}
          />
          <TextField
            fullWidth
            label='Имя'
            defaultValue={user.firstName}
            variant='standard'
            className={`${styles.textField}`}
            slotProps={{
              inputLabel: {
                sx: { color: '#B3C0D2' }
              }
            }}
          />
          <TextField
            fullWidth
            label='Отчество'
            defaultValue={user.middleName}
            variant='standard'
            slotProps={{
              inputLabel: {
                sx: { color: '#B3C0D2' }
              }
            }}
            className={`${styles.textField} ${styles.middleNameField}`}
          />
        </div>

        <div style={{ gridArea: 'changePassword' }}>
          <h1 className={styles.titlePassword}>Изменить пароль</h1>
          <div style={{ position: 'relative' }}>
            <TextField
              fullWidth
              label='Старый пароль'
              defaultValue={user.oldPassword}
              variant='standard'
              placeholder='Введите пароль *'
              className={`${styles.textField}`}
              slotProps={{
                inputLabel: {
                  sx: { color: '#B3C0D2' }
                }
              }}
              sx={{
                '& input::placeholder': {
                  color: 'red',
                  fontSize: '14px',
                  textAlign: 'right'
                }
              }}
            />
          </div>
          <TextField
            fullWidth
            label='Новый пароль'
            defaultValue={user.newPassword}
            variant='standard'
            className={`${styles.textField}`}
            slotProps={{
              inputLabel: {
                sx: { color: '#B3C0D2' }
              }
            }}
          />
          <TextField
            fullWidth
            label='Повторите пароль'
            defaultValue={user.repeatPassword}
            variant='standard'
            className={`${styles.textField}`}
            slotProps={{
              inputLabel: {
                sx: { color: '#B3C0D2' }
              }
            }}
          />
        </div>

        <div style={{ gridArea: 'address' }}>
          <h1 className={styles.titleContact}>Адрес доставки и контакты</h1>
          <TextField
            fullWidth
            label='Область'
            defaultValue={user.region}
            variant='standard'
            className={`${styles.textField}`}
            slotProps={{
              inputLabel: {
                sx: { color: '#B3C0D2' }
              }
            }}
          />
          <TextField
            fullWidth
            label='Город'
            defaultValue={user.city}
            variant='standard'
            className={`${styles.textField}`}
            slotProps={{
              inputLabel: {
                sx: { color: '#B3C0D2' }
              }
            }}
          />
          <TextField
            fullWidth
            label='Улица'
            defaultValue={user.street}
            variant='standard'
            className={`${styles.textField}`}
            slotProps={{
              inputLabel: {
                sx: { color: '#B3C0D2' }
              }
            }}
          />
          <div className={styles.addressInputs}>
            <TextField
              fullWidth
              label='Дом'
              defaultValue={user.house}
              variant='standard'
              className={`${styles.textField} ${styles.houseField}`}
              slotProps={{
                inputLabel: {
                  sx: { color: '#B3C0D2' }
                }
              }}
            />
            <TextField
              fullWidth
              label='Корпус'
              defaultValue={user.building}
              variant='standard'
              className={`${styles.textField} ${styles.buildingField}`}
              slotProps={{
                inputLabel: {
                  sx: { color: '#B3C0D2' }
                }
              }}
            />

            <TextField
              fullWidth
              label='Квартира'
              defaultValue={user.apartment}
              variant='standard'
              className={`${styles.textField} ${styles.apartmentField}`}
              slotProps={{
                inputLabel: {
                  sx: { color: '#B3C0D2' }
                }
              }}
            />
          </div>
          <TextField
            fullWidth
            label='Индекс'
            defaultValue={user.index}
            variant='standard'
            className={`${styles.textField} ${styles.indexField}`}
            slotProps={{
              inputLabel: {
                sx: { color: '#B3C0D2' }
              }
            }}
          />
        </div>
        <div style={{ gridArea: 'contacts' }} className={styles.contacts}>
          <TextField
            fullWidth
            label='Email'
            defaultValue={user.email}
            variant='standard'
            className={`${styles.textField}`}
            slotProps={{
              inputLabel: {
                sx: { color: '#B3C0D2' }
              }
            }}
          />
          <TextField
            fullWidth
            label='Телефон'
            defaultValue={user.phone}
            variant='standard'
            className={`${styles.textField}`}
            slotProps={{
              inputLabel: {
                sx: { color: '#B3C0D2' }
              }
            }}
          />
        </div>
      </Grid>
      <div className={styles.submitButtonContainer}>
        <SubmitButton
          text='Сохранить изменения'
          onClick={() => {}}
          className={styles.submitButtonCustom}
        />
      </div>
    </form>
  </div>
));
