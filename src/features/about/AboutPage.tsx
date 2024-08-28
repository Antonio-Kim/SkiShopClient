import { Container, Typography } from '@mui/material';

export default function AboutPage() {
  return (
    <Container>
      <Typography>
        This is fictional Ski Equipment E-Commerce website, with functional user
        account using ASP.NET Identity and Payment System using Stripe. The
        Front end is developed using React + Vite, and ASP.NET 8.0 Backend.
        Database was initially developed with Sqlite, but production is
        implemented using PostgreSQL and docker. UI and icons are created using
        Material UI. You can create an account, add items to the cart, and
        review your order when checking out after the purchase. To see the code
        implementation, please checkout www.github.com/Antonio-Kim
      </Typography>
    </Container>
  );
}
