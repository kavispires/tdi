import { Image, Layout, message, Select } from 'antd';
import { Fragment } from 'react';
import { useCardWidth } from 'hooks/useCardWidth';
import { useAsync, useCopyToClipboard } from 'react-use';
import { ManOutlined, WomanOutlined } from '@ant-design/icons';
import { useQueryParams } from 'hooks/useQueryParams';

const { Header, Content } = Layout;

const DECK = Array(114)
  .fill(1)
  .map((e, i) => (e + i < 10 ? `0${e + i}` : `${e + i}`));

export function SuspectCards() {
  const [, copyToClipboard] = useCopyToClipboard();
  const cardWidth = useCardWidth();
  const [messageApi, contextHolder] = message.useMessage();
  const qp = useQueryParams({ version: 'original' });
  const { version = '' } = qp.queryParams;

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
        <h1>
          Suspects{' '}
          <Select
            size="small"
            value={version}
            onChange={(e) => qp.add('version', e)}
            style={{ minWidth: '10ch' }}
          >
            <Select.Option value="original">Original</Select.Option>
            <Select.Option value="ai">AI</Select.Option>
            <Select.Option value="ct">Cartoon</Select.Option>
            <Select.Option value="alt">AI Alternative</Select.Option>
          </Select>
        </h1>{' '}
        {loading} {contextHolder}
      </Header>
      <Content className="page__content suspects">
        <Image.PreviewGroup>
          {DECK.map((id) => {
            const entryId = `us-${id}`;
            const data = Boolean(value) ? value[entryId] : null;
            const url =
              version === 'original'
                ? `${process.env.PUBLIC_URL}/images/us/${id}.jpg`
                : `${process.env.PUBLIC_URL}/images/us/${version}/${id}.jpg`;
            const url2 = `https://www.kavispires.com/tdi/images/us/${id}.jpg`;
            return (
              <Fragment key={`img-${id}`}>
                <div className="suspect" style={{ width: `${cardWidth}px` }}>
                  <Image width={cardWidth} src={url} placeholder className="suspect__image" />
                  {Boolean(data) && (
                    <span className="suspect__name" role="button" onClick={() => info(url2)}>
                      [{id}] {data.gender === 'male' ? <ManOutlined /> : <WomanOutlined />}
                      <br />
                      🇧🇷 {data.name.pt}
                      <br />
                      🇺🇸 {data.name.en}
                    </span>
                  )}
                </div>
              </Fragment>
            );
          })}
        </Image.PreviewGroup>
      </Content>
    </Layout>
  );
}
