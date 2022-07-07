import classNames from 'classnames/bind';
import styles from './Layout.module.scss';

const cx = classNames.bind(styles);

function Layout({ Header, Sidebar, children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content','flex-center', 'bg')}>
                    <div className={cx('ball', 'bg-ball')}></div>
                    <div className={cx('ball1', 'bg-ball')}></div>
                    <div className={cx('ball2', 'bg-ball')}></div>
                    <div className={cx('oval')}></div>
                    <div className={cx('oval2')}></div>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Layout;
