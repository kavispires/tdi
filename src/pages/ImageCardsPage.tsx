import { FileImageOutlined } from '@ant-design/icons';
import { Image, Menu, MenuProps } from 'antd';
import { useEffect, useState } from 'react';
import { Layout } from 'antd';
import { useQueryParams } from 'hooks/useQueryParams';
import { useCardWidth } from 'hooks/useCardWidth';

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
  {
    label: 'TD Deck 6',
    key: 'd6',
    icon: <FileImageOutlined />,
  },
];

export function ImageCards() {
  const qp = useQueryParams({ deck: 'd1' });
  const [current, setCurrent] = useState('');
  const cardWidth = useCardWidth();

  const onClick: MenuProps['onClick'] = (e) => {
    qp.add('deck', e.key);
  };

  useEffect(() => {
    setCurrent(qp.queryParams.deck);
  }, [qp.queryParams]);

  return (
    <Layout className="page" id="page">
      <Header className="page__header" style={{ paddingInline: 0 }}>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} theme="dark" />
      </Header>
      <Content className="page__content">
        {Boolean(current) && (
          <Image.PreviewGroup>
            {Array(84)
              .fill(1)
              .map((e, i) => {
                const id = e + i < 10 ? `0${e + i}` : `${e + i}`;

                return (
                  <Image
                    key={`img-${id}`}
                    width={cardWidth}
                    src={`${process.env.PUBLIC_URL}/images/td/${current}/${id}.jpg`}
                    placeholder
                  />
                );
              })}
          </Image.PreviewGroup>
        )}
      </Content>
    </Layout>
  );
}
