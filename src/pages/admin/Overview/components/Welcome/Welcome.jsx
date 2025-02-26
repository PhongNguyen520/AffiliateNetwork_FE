import React from 'react'
import classNames from 'classnames/bind'
import styles from './Welcome.module.scss'

const cx = classNames.bind(styles)

function Welcome() {
  return (
    <div className={cx('container')}>
      <p className={cx('greeting')}>Hello,</p>
      <p className={cx('welcomeMessage')}>
        <span className={cx('highlight')}>Welcome</span> to our platform!
      </p>
    </div>
  )
}

export default Welcome
