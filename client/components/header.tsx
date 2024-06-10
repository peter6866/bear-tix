import Link from 'next/link';
import { Group, Button, Box, Flex } from '@mantine/core';
import classes from './Header.module.css';
import Router from 'next/router';
import { Title } from '@mantine/core';
import Image from 'next/image';

interface HeaderProps {
  currentUser: any;
}

const links = [
  { link: '/tickets/new', label: 'Sell Tickets' },
  { link: '/orders', label: 'My Orders' },
];

export default function Header({ currentUser }: HeaderProps) {
  const items = links.map((link) => (
    <Link href={link.link} key={link.link} className={classes.link}>
      {link.label}
    </Link>
  ));

  return (
    <Box pb={35}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Flex
            align="center"
            style={{ cursor: 'pointer' }}
            onClick={() => Router.push('/')}
          >
            <Image src="/pawlogo.png" alt="Bear Tix" width={30} height={30} />
            <Title style={{ marginLeft: '12px' }} order={2}>
              Bear Tix
            </Title>
          </Flex>

          {currentUser && (
            <Group h="100%" gap={0} visibleFrom="sm">
              {items}
              <Button
                variant="filled"
                onClick={() => {
                  Router.push('/auth/signout');
                }}
                style={{ marginLeft: '8px' }}
              >
                Sign out
              </Button>
            </Group>
          )}

          {!currentUser && (
            <Group>
              <Link href="/auth/signin">
                <Button variant="transparent">Log in</Button>
              </Link>
              <Link href="/auth/signup">
                <Button>Sign up</Button>
              </Link>
            </Group>
          )}
        </Group>
      </header>
    </Box>
  );
}
