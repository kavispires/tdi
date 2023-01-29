import { CopyFilled } from '@ant-design/icons';
import { Layout, Form, InputNumber, Select, Space, Button, Card, message } from 'antd';
import { random, sample } from 'lodash';
import { useState } from 'react';
import { useCopyToClipboard } from 'react-use';
import { ALL_EMOJIS } from 'utils/emojis';

const { Header, Content } = Layout;

interface FormFields {
  emojis: number;
  setting: string;
  style: string;
  quantity: number;
}

const emojis = ALL_EMOJIS.split('');

const getEmojiIndex = (quantity: number) => {
  let res = [];
  for (let i = 0; i < quantity; i++) {
    const index = random(0, emojis.length);
    res.push(index);
  }
  return res;
};
getEmojiIndex(4);
export function Prompter() {
  const [form] = Form.useForm<FormFields>();
  const [results, setResults] = useState<(string | number[])[][]>([]);
  const [, copyToClipboard] = useCopyToClipboard();

  const [messageApi, contextHolder] = message.useMessage();

  const info = (url: string) => {
    copyToClipboard(url);
    messageApi.info(`Copied ${url}`);
  };

  const generate = (values: FormFields) => {
    const resultSet = [];
    for (let i = 0; i < values.quantity; i++) {
      const emojiIndexes = [random(0, values.emojis)];
      const parameters = [];
      parameters.push(values.setting === 'random' ? sample(SETTINGS) : values.setting);

      parameters.push(values.style === 'random' ? sample(STYLES) : values.style);

      parameters.push(`--dixit --chaos ${sample([60, 70, 85, 90])}`);

      resultSet.push([emojiIndexes, parameters.join(', ')]);
    }

    setResults(resultSet);
  };

  return (
    <Layout className="page" id="page">
      <Header className="page__header" style={{ paddingInline: 0 }}>
        <h1>Prompter</h1>
      </Header>
      <Content className="page__content">
        <Card className="card" bordered={false}>
          <Form
            form={form}
            layout="vertical"
            autoComplete="off"
            initialValues={{
              emojis: 5,
              setting: 'random',
              style: 'cartoon',
              quantity: 10,
            }}
            onFinish={generate}
          >
            <Form.Item name="emojis" label="Number of Emojis">
              <InputNumber min={3} max={10} />
            </Form.Item>
            <Form.Item name="setting" label="Setting">
              <Select>
                <Select.Option value="">None</Select.Option>
                <Select.Option value="random">Random</Select.Option>
                {SETTINGS.map((entry) => {
                  return <Select.Option value={entry}>{entry}</Select.Option>;
                })}
              </Select>
            </Form.Item>
            <Form.Item name="style" label="Style">
              <Select>
                <Select.Option value="">None</Select.Option>
                <Select.Option value="random">Random</Select.Option>
                {STYLES.map((entry) => {
                  return <Select.Option value={entry}>{entry}</Select.Option>;
                })}
              </Select>
            </Form.Item>
            <Form.Item name="quantity" label="Total Prompts">
              <InputNumber min={1} max={30} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Generate
              </Button>
            </Form.Item>
          </Form>
        </Card>

        <Card className="card" bordered={false}>
          {contextHolder}
          <Space className="" direction="vertical">
            {results.map((result) => {
              // const indexes = result[0] as number[];

              return (
                <Card className="prompt-entry" key={JSON.stringify(result)} size="small">
                  {result[1]}
                  <Button shape="default" icon={<CopyFilled />} onClick={() => info(String(result[1]))} />
                </Card>
              );
            })}
          </Space>
        </Card>
      </Content>
    </Layout>
  );
}

const SETTINGS = [
  'in the street',
  'on the road',
  'in a car',
  'on a bus',
  'on a train',
  'on an airplane',
  'in a submarine',
  'in the sky',
  'in the jungle',
  'in the desert',
  'in a bedroom',
  'in a room',
  'in a office',
  'in space',
  'in another planet',
  'in a fantasy world',
  'in the meadow',
  'in a stadium',
  'in a school',
  'on a mountain',
  'in a swamp',
  'in the river',
  'in the ocean',
  'in an island',
  'in Paris',
  'in Japan',
  'in a warehouse',
  'in a hurricane',
  'in a toy factory',
  'in an amusement park',
  'in Mars',
  'in a box',
  'in a safe',
  'in a bank',
  'in a maze',
  'in the forest',
  'in a prairie',
  'at a party',
  'in a building',
  'in a house',
  'in heaven',
  'in hell',
  'in a casino',
  'on a phone screen',
];

const STYLES = [
  'cartoon',
  'ghibli --no totoro',
  'disney style',
  'gravity falls style',
  '8-bit',
  'origami',
  'drawing',
];
