import { FC, memo } from 'react';
import { SubmitButton } from '../../ui-kit';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';
import styles from './profile-menu.module.scss';
import { User } from './type';

export const ProfileMenuUI: FC<User> = memo((user) => (
  <div className={styles.profileInfoContainer}>
    <form>
      <Grid className={styles.grid_container}>
        <div style={{ gridArea: 'personal-data' }}>
          <h1 className={styles.title}>Личные данные</h1>
          <TextField
            fullWidth
            label='Фамилия'
            defaultValue={user.lastName}
            variant='standard'
            slotProps={{
              inputLabel: {
                sx: { color: '#B3C0D2' }
              }
            }}
            sx={{
              '& .MuiInputBase-root': {
                borderBottom: '2px solid #002C6A',
                width: '470px',
                margin: '10px 70px 13px 0',
                '&:before, &:after': {
                  display: 'none'
                },
                '& input': {
                  fontSize: '26px'
                }
              }
            }}
          />
          <TextField
            fullWidth
            label='Имя'
            defaultValue={user.firstName}
            variant='standard'
            slotProps={{
              inputLabel: {
                sx: { color: '#B3C0D2' }
              }
            }}
            sx={{
              '& .MuiInputBase-root': {
                borderBottom: '2px solid #002C6A',
                width: '470px',
                marginBottom: '12px',
                color: '#B3C0D2',
                '&:before, &:after': {
                  display: 'none'
                },
                '& input': {
                  fontSize: '26px'
                }
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
            sx={{
              '& .MuiInputBase-root': {
                borderBottom: '2px solid #002C6A',
                width: '470px',
                marginBottom: '61px',
                '&:before, &:after': {
                  display: 'none'
                },
                '& input': {
                  fontSize: '26px'
                }
              }
            }}
          />
        </div>

        <div style={{ gridArea: 'change-password' }}>
          <h1 className={styles.titlePassword}>Изменить пароль</h1>
          <div style={{ position: 'relative' }}>
            <TextField
              fullWidth
              label='Старый пароль'
              defaultValue={user.oldPassword}
              variant='standard'
              placeholder='Введите пароль *'
              slotProps={{
                inputLabel: {
                  sx: { color: '#B3C0D2' }
                }
              }}
              sx={{
                '& .MuiInputBase-root': {
                  borderBottom: '2px solid #002C6A',
                  width: '470px',
                  marginBottom: '14px',
                  '&:before, &:after': {
                    display: 'none'
                  },
                  '& input': {
                    fontSize: '26px',
                    color: '#000'
                  },
                  '& input::placeholder': {
                    color: 'red',
                    fontSize: '14px',
                    textAlign: 'right'
                  }
                }
              }}
            />
          </div>
          <TextField
            fullWidth
            label='Новый пароль'
            defaultValue={user.newPassword}
            variant='standard'
            slotProps={{
              inputLabel: {
                sx: { color: '#B3C0D2' }
              }
            }}
            sx={{
              '& .MuiInputBase-root': {
                borderBottom: '2px solid #002C6A',
                width: '470px',
                marginBottom: '12px',
                '&:before, &:after': {
                  display: 'none'
                },
                '& input': {
                  fontSize: '26px'
                }
              }
            }}
          />
          <TextField
            fullWidth
            label='Повторите пароль'
            defaultValue={user.repeatPassword}
            variant='standard'
            slotProps={{
              inputLabel: {
                sx: { color: '#B3C0D2' }
              }
            }}
            sx={{
              '& .MuiInputBase-root': {
                borderBottom: '2px solid #002C6A',
                width: '470px',
                '&:before, &:after': {
                  display: 'none'
                },
                '& input': {
                  fontSize: '26px'
                }
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
            slotProps={{
              inputLabel: {
                sx: { color: '#B3C0D2' }
              }
            }}
            sx={{
              '& .MuiInputBase-root': {
                borderBottom: '2px solid #002C6A',
                width: '470px',
                marginBottom: '15px',
                '&:before, &:after': {
                  display: 'none'
                },
                '& input': {
                  fontSize: '26px'
                }
              }
            }}
          />
          <TextField
            fullWidth
            label='Город'
            defaultValue={user.city}
            variant='standard'
            slotProps={{
              inputLabel: {
                sx: { color: '#B3C0D2' }
              }
            }}
            sx={{
              '& .MuiInputBase-root': {
                borderBottom: '2px solid #002C6A',
                width: '470px',
                marginBottom: '10px',
                '&:before, &:after': {
                  display: 'none'
                },
                '& input': {
                  fontSize: '26px'
                }
              }
            }}
          />
          <TextField
            fullWidth
            label='Улица'
            defaultValue={user.street}
            variant='standard'
            slotProps={{
              inputLabel: {
                sx: { color: '#B3C0D2' }
              }
            }}
            sx={{
              '& .MuiInputBase-root': {
                borderBottom: '2px solid #002C6A',
                width: '470px',
                marginBottom: '13px',
                '&:before, &:after': {
                  display: 'none'
                },
                '& input': {
                  fontSize: '26px'
                }
              }
            }}
          />
          <div className={styles.addressInputs}>
            <TextField
              fullWidth
              label='Дом'
              defaultValue={user.house}
              variant='standard'
              slotProps={{
                inputLabel: {
                  sx: { color: '#B3C0D2' }
                }
              }}
              sx={{
                '& .MuiInputBase-root': {
                  borderBottom: '2px solid #002C6A',
                  width: '95px',
                  marginBottom: '13px',
                  '&:before, &:after': {
                    display: 'none'
                  },
                  '& input': {
                    fontSize: '26px'
                  }
                }
              }}
            />
            <TextField
              fullWidth
              label='Корпус'
              defaultValue={user.building}
              variant='standard'
              slotProps={{
                inputLabel: {
                  sx: { color: '#B3C0D2' }
                }
              }}
              sx={{
                '& .MuiInputBase-root': {
                  borderBottom: '2px solid #002C6A',
                  width: '95px',
                  marginBottom: '10px',
                  '&:before, &:after': {
                    display: 'none'
                  },
                  '& input': {
                    fontSize: '26px'
                  }
                }
              }}
            />

            <TextField
              fullWidth
              label='Квартира'
              defaultValue={user.apartment}
              variant='standard'
              slotProps={{
                inputLabel: {
                  sx: { color: '#B3C0D2' }
                }
              }}
              sx={{
                '& .MuiInputBase-root': {
                  borderBottom: '2px solid #002C6A',
                  width: '95px',
                  marginBottom: '10px',
                  '&:before, &:after': {
                    display: 'none'
                  },
                  '& input': {
                    fontSize: '26px'
                  }
                }
              }}
            />
          </div>
          <TextField
            fullWidth
            label='Индекс'
            defaultValue={user.index}
            variant='standard'
            slotProps={{
              inputLabel: {
                sx: { color: '#B3C0D2' }
              }
            }}
            sx={{
              '& .MuiInputBase-root': {
                borderBottom: '2px solid #002C6A',
                width: '470px',
                marginBottom: '10px',
                '&:before, &:after': {
                  display: 'none'
                },
                '& input': {
                  fontSize: '26px'
                }
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
            slotProps={{
              inputLabel: {
                sx: { color: '#B3C0D2' }
              }
            }}
            sx={{
              '& .MuiInputBase-root': {
                borderBottom: '2px solid #002C6A',
                width: '470px',
                marginBottom: '20px',
                '&:before, &:after': {
                  display: 'none'
                },
                '& input': {
                  fontSize: '26px'
                }
              }
            }}
          />
          <TextField
            fullWidth
            label='Телефон'
            defaultValue={user.phone}
            variant='standard'
            slotProps={{
              inputLabel: {
                sx: { color: '#B3C0D2' }
              }
            }}
            sx={{
              '& .MuiInputBase-root': {
                borderBottom: '2px solid #002C6A',
                width: '470px',
                marginBottom: '10px',
                '&:before, &:after': {
                  display: 'none'
                },
                '& input': {
                  fontSize: '26px'
                }
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
