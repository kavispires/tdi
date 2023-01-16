import { FileImageOutlined } from '@ant-design/icons';
import { Image, Menu, MenuProps } from 'antd';
import { useState } from 'react';
import { Layout } from 'antd';

const { Header, Content } = Layout;

const items: MenuProps['items'] = [
  {
    label: 'TD Deck 1',
    key: 'd1',
    icon: <FileImageOutlined />,
  },
  {
    label: 'TD Deck 2',
    key: 'd2',
    icon: <FileImageOutlined />,
  },
  {
    label: 'TD Deck 3',
    key: 'd3',
    icon: <FileImageOutlined />,
  },
  {
    label: 'TD Deck 4',
    key: 'd4',
    icon: <FileImageOutlined />,
  },
  {
    label: 'TD Deck 5',
    key: 'd5',
    icon: <FileImageOutlined />,
  },
];

export function ImageCards() {
  const [current, setCurrent] = useState('d1');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Layout className="page">
      <Header className="page__header">
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} theme="dark" />
      </Header>
      <Content className="page__content">
        <Image.PreviewGroup>
          {Array(84)
            .fill(1)
            .map((e, i) => {
              const id = e + i < 10 ? `0${e + i}` : `${e + i}`;

              return (
                <Image
                  key={`img-${id}`}
                  width={150}
                  src={`${process.env.PUBLIC_URL}/images/td/${current}/${id}.jpg`}
                />
              );
            })}
        </Image.PreviewGroup>
      </Content>
    </Layout>
  );
}
