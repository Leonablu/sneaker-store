import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { FC, memo } from 'react';
import { List } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Link from '@mui/material/Link';
import styles from './contacts.module.scss';

type ListContactsProps = {
  isComponentInHeader: boolean;
};

export const ListContacts: FC<ListContactsProps> = memo(
  ({ isComponentInHeader }) => (
    <>
      <address>
        <List className={styles.list_contacts}>
          <ListItem className={styles.list_contacts_item}>
            <CallIcon
              viewBox='0 0 20 22'
              sx={{
                color: isComponentInHeader
                  ? 'rgb(0 44 106 / 1)'
                  : 'rgba(179, 192, 210, 1)',
                width: '20px',
                height: '20px'
              }}
            />
            <Link
              className={styles.link_contact}
              href='tel:+1234567890'
              rel='nofollow'
              underline='none'
              sx={{
                color: isComponentInHeader
                  ? 'rgba(41, 41, 45, 1)'
                  : 'rgba(179, 192, 210, 1)'
              }}
            >
              +7 951 999 28 34
            </Link>
          </ListItem>
          <ListItem className={styles.list_contacts_item}>
            <EmailIcon
              viewBox='0 7 22 10'
              sx={{
                color: isComponentInHeader
                  ? 'rgb(0 44 106 / 1)'
                  : 'rgba(179, 192, 210, 1)',
                width: '20px',
                height: '20px'
              }}
            />
            <Link
              className={styles.link_contact}
              href='mailto:example@example.com'
              rel='nofollow'
              underline='none'
              sx={{
                color: isComponentInHeader
                  ? 'rgba(41, 41, 45, 1)'
                  : 'rgba(179, 192, 210, 1)'
              }}
            >
              info@stageboxbrand.ru
            </Link>
          </ListItem>
        </List>
      </address>
    </>
  )
);
