import React from 'react';
import {
  Card,
  Typography,
  List,
  Row,
  Col,
  Space,
} from 'antd';
import {
  InfoCircleOutlined,
  ThunderboltOutlined,
  TeamOutlined,
  DatabaseOutlined,
} from '@ant-design/icons';

const AboutPlatform: React.FC = () => {
  const features = [
    '多驱动器支持 (OneDrive, Google Drive, 百度网盘等)',
    '文件加密和分享功能',
    '用户权限管理',
    '离线下载和任务管理',
    'WebDAV和FTP支持',
    '响应式Web界面',
    'RESTful API接口',
    '插件扩展系统',
  ];

  const technologies = [
    { name: '前端', tech: 'React + TypeScript + Ant Design' },
    { name: '后端', tech: 'Cloudflare Workers + Hono + TypeScript' },
    { name: '数据库', tech: 'Cloudflare D1 / SQLite / 远程数据库' },
    { name: '构建工具', tech: 'Vite / Wrangler' },
    { name: '部署', tech: 'Cloudflare Workers' },
  ];

  return (
    <div style={{ width: '100%', height: '100%', padding: 24 }}>
      <Row gutter={[24, 24]}>
        {/* 平台信息 */}
        <Col xs={24} md={12}>
          <Card
            title={
              <Space>
                <InfoCircleOutlined style={{ color: 'var(--ant-color-primary)' }} />
                <span>平台信息</span>
              </Space>
            }
            style={{ borderRadius: 12 }}
          >
            <Typography.Paragraph>
              OpenList 是一个开源的云存储管理平台，基于 Cloudflare Workers 构建，
              支持多种云存储服务的统一管理。
            </Typography.Paragraph>
            <List
              size="small"
              dataSource={technologies}
              renderItem={(tech) => (
                <List.Item>
                  <List.Item.Meta title={tech.name} description={tech.tech} />
                </List.Item>
              )}
            />
          </Card>
        </Col>

        {/* 主要功能 */}
        <Col xs={24}>
          <Card
            title={
              <Space>
                <ThunderboltOutlined style={{ color: 'var(--ant-color-primary)' }} />
                <span>主要功能</span>
              </Space>
            }
            style={{ borderRadius: 12 }}
          >
            <Row gutter={[16, 12]}>
              {features.map((feature, index) => (
                <Col xs={24} md={12} key={index}>
                  <Space align="center">
                    <DatabaseOutlined style={{ color: 'var(--ant-color-text-secondary)', fontSize: 14 }} />
                    <Typography.Text>{feature}</Typography.Text>
                  </Space>
                </Col>
              ))}
            </Row>
          </Card>
        </Col>

        {/* 开发团队 */}
        <Col xs={24}>
          <Card
            title={
              <Space>
                <TeamOutlined style={{ color: 'var(--ant-color-primary)' }} />
                <span>开发团队</span>
              </Space>
            }
            style={{ borderRadius: 12 }}
          >
            <Typography.Paragraph>
              OpenList 是一个开源的云存储管理项目，旨在为用户提供一个统一、安全、易用的多云存储管理平台。
            </Typography.Paragraph>
            <Typography.Text type="secondary">
              项目地址: https://github.com/OpenListTeam/OpenList
            </Typography.Text>
            <br />
            <Typography.Text type="secondary">
              文档地址: https://docs.oplist.org
            </Typography.Text>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AboutPlatform;