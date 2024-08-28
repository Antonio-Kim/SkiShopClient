import { Link, List, ListItem, Typography } from '@mui/material';

export default function ContactPage() {
  return (
    <>
      <Typography variant="h2">Contacts</Typography>
      <List>
        <ListItem>
          <Link href="https://www.github.com/Antonio-Kim">GitHub</Link>
        </ListItem>
        <ListItem>
          <Link href="https://www.linkedin.com/in/antonio-kim">LinkedIn</Link>
        </ListItem>
      </List>
    </>
  );
}
