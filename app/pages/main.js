import isObject from 'is-object';

export default () => isObject(false) ? <h1>false</h1> : <h1>true</h1>;
