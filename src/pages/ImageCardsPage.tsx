import { FileImageOutlined } from '@ant-design/icons';
import { Image, Layout, Menu, MenuProps } from 'antd';
import { useEffect, useState } from 'react';
import { useQueryParams } from 'hooks/useQueryParams';
import { useCardWidth } from 'hooks/useCardWidth';

const { Header, Content } = Layout;

const DECK = Array(252).fill(1);

const items: MenuProps['items'] = Array(10)
  .fill(1)
  .map((e, i) => ({
    label: `TD Deck ${e + i}`,
    key: `d${e + i}`,
    icon: <FileImageOutlined />,
  }));

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
            {DECK.map((e, i) => {
              const id = e + i < 10 ? `0${e + i}` : `${e + i}`;

              return (
                <Image
                  key={`img-${current}-${id}`}
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
