import { Image, Layout, message } from 'antd';
import { Fragment } from 'react';
import { useCardWidth } from 'hooks/useCardWidth';
import { useAsync, useCopyToClipboard } from 'react-use';
import { ManOutlined, WomanOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;

const DECK = Array(114).fill(1);

export function SuspectCards() {
  const [, copyToClipboard] = useCopyToClipboard();
  const cardWidth = useCardWidth();
  const [messageApi, contextHolder] = message.useMessage();

  const { loading, value } = useAsync(async () => {
    const response = await fetch(`${process.env.PUBLIC_URL}/data/us/info.json`);
    const result = await response.json();
    return result;
  }, []);

  const info = (url: string) => {
    copyToClipboard(url);
    messageApi.info(`Copied ${url}`);
  };

  return (
    <Layout className="page" id="page">
      <Header className="page__header" style={{ paddingInline: 0 }}>
        <h1>Suspects</h1> {loading} {contextHolder}
      </Header>
      <Content className="page__content suspects">
        <Image.PreviewGroup>
          {DECK.fill(1).map((e, i) => {
            const id = e + i < 10 ? `0${e + i}` : `${e + i}`;
            const entryId = `us-${id}`;
            const data = Boolean(value) ? value[entryId] : null;
            const url = `${process.env.PUBLIC_URL}/images/us/${id}.jpg`;
            const url2 = `https://www.kavispires.com/tdi/images/us/${id}.jpg`;
            return (
              <Fragment key={`img-${id}`}>
                <div className="suspect" style={{ width: `${cardWidth}px` }}>
                  <Image width={cardWidth} src={url} placeholder className="suspect__image" />
                  {Boolean(data) && (
                    <span className="suspect__name" role="button" onClick={() => info(url2)}>
                      {data.gender === 'name' ? <ManOutlined /> : <WomanOutlined />}
                      <br />
                      🇧🇷 {data.name.pt}
                      <br />
                      🇺🇸 {data.name.en}
                    </span>
                  )}
                </div>
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
