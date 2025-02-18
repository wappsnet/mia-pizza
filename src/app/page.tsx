'use client';
import { Flex, Col, Layout, Row, Image, Button, Space, Card } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import { PhoneOutlined, SendOutlined } from '@ant-design/icons';
import Paragraph from 'antd/lib/typography/Paragraph';

const MP_CONFIGS = {
  products: [
    {
      key: 'pizza1',
      name: 'Pizza 1',
      image: '/products/pizza-1.jpeg',
    },
    {
      key: 'pizza2',
      name: 'Pizza 2',
      image: '/products/pizza-2.jpeg',
    },
    {
      key: 'pizza3',
      name: 'Pizza 3',
      image: '/products/pizza-3.jpeg',
    },
    {
      key: 'pizza4',
      name: 'Pizza 4',
      image: '/products/pizza-3.jpeg',
    },
    {
      key: 'pizza5',
      name: 'Pizza 5',
      image: '/products/pizza-5.jpeg',
    },
    {
      key: 'pizza6',
      name: 'Pizza 6',
      image: '/products/pizza-6.jpeg',
    },
    {
      key: 'pizza7',
      name: 'Pizza 7',
      image: '/products/pizza-7.jpeg',
    },
  ],
};

export default function Home() {
  return (
    <Flex gap="middle" justify="center" align="center" wrap>
      <Layout>
        <Header className="mp-header">
          <Flex gap="middle" justify="center" align="center">
            <img src="/logo.png" alt="MIAPIZZA logo" height={150} />
          </Flex>
        </Header>

        <Content className="mp-content">
          <Flex gap="middle" justify="center" align="center">
            <Row gutter={12} justify="center">
              {MP_CONFIGS.products.map((item) => {
                return (
                  <Col
                    key={item.key}
                    className="gutter-row"
                    span={3}
                    xl={3}
                    lg={3}
                    md={4}
                    xs={12}
                  >
                    <Image height="100%" alt={item.name} src={item.image} />
                  </Col>
                );
              })}
            </Row>
          </Flex>
        </Content>
        <Footer className="mp-footer">
          <Card>
            <Flex gap="large" justify="center" align="center" vertical>
              <Space size="large" direction="vertical" align="center">
                <Paragraph>
                  Сайт находится на стадии разработки, а пока можно оставлять
                  заказы на нашем телеграмм канале или по телефону
                </Paragraph>
              </Space>
              <Flex gap="large" justify="center" align="center">
                <Button icon={<PhoneOutlined />} href="tel:+79937174040">
                  +79937174040
                </Button>
                <Button
                  icon={<SendOutlined />}
                  href="https://web.telegram.org/k/#-2384079083"
                >
                  Telegram
                </Button>
              </Flex>
            </Flex>
          </Card>
        </Footer>
      </Layout>
    </Flex>
  );
}
