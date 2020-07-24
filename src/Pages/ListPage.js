import React, {Component} from 'react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import { List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

class ListPage extends Component {
    state = {
        disabled: false,
    }
    render() {
        return (
            <div>

                <List renderHeader={() => 'Basic Style'} className="my-list">
                    <Item extra={'extra content'}>Title</Item>
                    <Item extra={'extra content'}>Title</Item>
                    <Item extra={'extra content'}>Title</Item>

                    <Item>
                        <WingBlank size="lg">
                            <WhiteSpace size="lg" />
                            <Card>
                                <Card.Header
                                    title="This is title"
                                    thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                                    extra={<span>this is extra</span>}
                                />
                                <Card.Body>
                                    <div>This is content of `Card`</div>
                                </Card.Body>
                                <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                            </Card>
                            <WhiteSpace size="lg" />
                        </WingBlank>
                    </Item>
                    <Item>
                        <WingBlank size="lg">
                            <WhiteSpace size="lg" />
                            <Card>
                                <Card.Header
                                    title="This is title"
                                    thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                                    extra={<span>this is extra</span>}
                                />
                                <Card.Body>
                                    <div>This is content of `Card`</div>
                                </Card.Body>
                                <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                            </Card>
                            <WhiteSpace size="lg" />
                        </WingBlank>
                    </Item>
                    <Item>
                        <WingBlank size="lg">
                            <WhiteSpace size="lg" />
                            <Card>
                                <Card.Header
                                    title="This is title"
                                    thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                                    extra={<span>this is extra</span>}
                                />
                                <Card.Body>
                                    <div>This is content of `Card`</div>
                                </Card.Body>
                                <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                            </Card>
                            <WhiteSpace size="lg" />
                        </WingBlank>
                    </Item>
                    <Item>
                        <WingBlank size="lg">
                            <WhiteSpace size="lg" />
                            <Card>
                                <Card.Header
                                    title="This is title"
                                    thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                                    extra={<span>this is extra</span>}
                                />
                                <Card.Body>
                                    <div>This is content of `Card`</div>
                                </Card.Body>
                                <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                            </Card>
                            <WhiteSpace size="lg" />
                        </WingBlank>
                    </Item>
                    <Item>
                        <WingBlank size="lg">
                            <WhiteSpace size="lg" />
                            <Card>
                                <Card.Header
                                    title="This is title"
                                    thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                                    extra={<span>this is extra</span>}
                                />
                                <Card.Body>
                                    <div>This is content of `Card`</div>
                                </Card.Body>
                                <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                            </Card>
                            <WhiteSpace size="lg" />
                        </WingBlank>
                    </Item>
                    <Item>
                        <WingBlank size="lg">
                            <WhiteSpace size="lg" />
                            <Card>
                                <Card.Header
                                    title="This is title"
                                    thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                                    extra={<span>this is extra</span>}
                                />
                                <Card.Body>
                                    <div>This is content of `Card`</div>
                                </Card.Body>
                                <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                            </Card>
                            <WhiteSpace size="lg" />
                        </WingBlank>
                    </Item>
                    <Item>
                        <WingBlank size="lg">
                            <WhiteSpace size="lg" />
                            <Card>
                                <Card.Header
                                    title="This is title"
                                    thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                                    extra={<span>this is extra</span>}
                                />
                                <Card.Body>
                                    <div>This is content of `Card`</div>
                                </Card.Body>
                                <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                            </Card>
                            <WhiteSpace size="lg" />
                        </WingBlank>
                    </Item>
                    <Item>
                        <WingBlank size="lg">
                            <WhiteSpace size="lg" />
                            <Card>
                                <Card.Header
                                    title="This is title"
                                    thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                                    extra={<span>this is extra</span>}
                                />
                                <Card.Body>
                                    <div>This is content of `Card`</div>
                                </Card.Body>
                                <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                            </Card>
                            <WhiteSpace size="lg" />
                        </WingBlank>
                    </Item>
                </List>
            </div>
        );
    }
}

export default ListPage;