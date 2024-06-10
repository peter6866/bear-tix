import { Title, Text, Group, Card, Badge, Button, Box } from '@mantine/core';
import Router from 'next/router';

interface Ticket {
  id: string;
  title: string;
  price: number;
}

const LandingPage = ({ tickets }: any) => {
  const ticketList = tickets.map((ticket: Ticket) => {
    return (
      <Card
        key={ticket.id}
        shadow="sm"
        padding="lg"
        withBorder
        w={300}
        my="1rem"
      >
        <Group justify="space-between" mb="xs">
          <Text fw={500}>{ticket.title}</Text>
          <Badge color="pink">On Sale</Badge>
        </Group>

        <Text fw={500}>${ticket.price}</Text>

        <Button
          color="blue"
          fullWidth
          mt="md"
          radius="md"
          onClick={() =>
            Router.push('/tickets/[ticketId]', `/tickets/${ticket.id}`)
          }
        >
          View
        </Button>
      </Card>
    );
  });

  return (
    <Box>
      <Title order={3}>Events</Title>
      {ticketList}
    </Box>
  );
};

LandingPage.getInitialProps = async (
  context: any,
  client: any,
  currentUser: any
) => {
  const { data } = await client.get('/api/tickets');

  return { tickets: data };
};

export default LandingPage;
