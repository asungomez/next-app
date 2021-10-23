import { Menu } from 'antd';
import { useRouter } from 'next/dist/client/router';

export const Navbar: React.FC<{}> = () => {
  const router = useRouter();

  const homeClickHandler = () => router.push('/');
  const eventsClickHandler = () => router.push('/events');

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      selectedKeys={[router.asPath.includes('events') ? 'events' : 'home']}
    >
      <Menu.Item onClick={homeClickHandler} key="home">
        Home
      </Menu.Item>
      <Menu.Item onClick={eventsClickHandler} key="events">
        Events
      </Menu.Item>
    </Menu>
  );
};
