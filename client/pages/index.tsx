import Link from 'next/link';

const LandingPage = ({ currentUser, tickets }: any) => {
  const ticketList = tickets.map((ticket: any) => {
    return (
      <tr key={ticket.id}>
        <td>{ticket.title}</td>
        <td>{ticket.price}</td>
        <td>
          <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
            View
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h1>Tickets</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>{ticketList}</tbody>
      </table>
    </div>
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
