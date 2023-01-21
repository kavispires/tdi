import { Image, Typography, Layout } from 'antd';
import { Fragment } from 'react';
import { useCardWidth } from 'hooks/useCardWidth';

const { Header, Content } = Layout;

const DECK = Array(114).fill(1);

export function SuspectCards() {
  // const qp = useQueryParams({ deck: 'd1' });
  // const [current, setCurrent] = useState('');
  const cardWidth = useCardWidth();

  // const onClick: MenuProps['onClick'] = (e) => {
  //   qp.add('deck', e.key);
  // };

  // useEffect(() => {
  //   setCurrent(qp.queryParams.deck);
  // }, [qp.queryParams]);

  return (
    <Layout className="page" id="page">
      <Header className="page__header" style={{ paddingInline: 0 }}>
        <h1>Suspects</h1>
      </Header>
      <Content className="page__content">
        <Image.PreviewGroup>
          {DECK.fill(1).map((e, i) => {
            const id = e + i < 10 ? `0${e + i}` : `${e + i}`;

            return (
              <Fragment key={`img-${id}`}>
                <Image width={cardWidth} src={`${process.env.PUBLIC_URL}/images/us/${id}.jpg`} placeholder />
                {/* <Image
                    key={`img-${id}`}
                    width={cardWidth}
                    src={`${process.env.PUBLIC_URL}/images/td/${current}/${id}.jpg`}
                    placeholder
                  />
                  <Image
                    key={`img-${id}`}
                    width={cardWidth}
                    src={`${process.env.PUBLIC_URL}/images/td/${current}/${id}.jpg`}
                    placeholder
                  /> */}
              </Fragment>
            );
          })}
        </Image.PreviewGroup>
      </Content>
    </Layout>
  );
}
