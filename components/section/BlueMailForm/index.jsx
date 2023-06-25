import React, { useState } from 'react';
import style from './style.module.scss';
const BlueMailForm = ({ setAlert }) => {
  const [accountType, setAccountType] = useState('Advanced');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [serverAddress, setServerAddress] = useState('');
  const [serverPath, setServerPath] = useState('');
  const [sslEnabled, setSslEnabled] = useState(false);
  const [port, setPort] = useState('');

  const handleAccountTypeChange = (e) => {
    setAccountType(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleServerAddressChange = (e) => {
    setServerAddress(e.target.value);
  };

  const handleServerPathChange = (e) => {
    setServerPath(e.target.value);
  };

  const handlePortChange = (e) => {
    setPort(e.target.value);
  };

  const handleSslChange = (e) => {
    setSslEnabled(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      accountType,
      username,
      password,
      serverAddress,
      serverPath,
      port,
    };
    setAlert(payload);
  };
  return (
    <div className={style['form-container']}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Account Type:</label>
          <select value={accountType} onChange={handleAccountTypeChange}>
            <option value=''>Select Account Type</option>
            <option value='Advanced'>Advanced</option>
            <option value='Manual'>Manual</option>
          </select>
        </div>
        <div>
          <label>User Name:</label>
          <input
            type='email'
            value={username}
            onChange={handleUsernameChange}
            placeholder='name@example.com'
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type='password'
            value={password}
            onChange={handlePasswordChange}
            placeholder='Required'
            required
          />
        </div>
        <div>
          <label>Server Address:</label>
          <input
            type='text'
            value={serverAddress}
            onChange={handleServerAddressChange}
            placeholder='example.com'
            required
          />
        </div>
        {accountType === 'Advanced' && (
          <>
            <div>
              <label>Server Path:</label>
              <input
                type='text'
                value={serverPath}
                onChange={handleServerPathChange}
                placeholder='/calendars/user'
                pattern='[a-zA-Z0-9/]+'
                required
              />
            </div>

            <div className={style['checkbox-label-container']}>
              <div>
                <label>Port:</label>
                <input
                  type='number'
                  value={port}
                  onChange={handlePortChange}
                  min='1'
                  max='65535'
                  required
                />
              </div>
              <div>
                <input
                  type='checkbox'
                  checked={sslEnabled}
                  onChange={handleSslChange}
                />
                <label>Use SSL</label>
              </div>
            </div>
          </>
        )}
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default BlueMailForm;
