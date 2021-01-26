import { Model, hasMany, belongsTo } from 'miragejs';

export default {
    user: Model.extend({
        messages: hasMany(),
    }),
    messages: Model.extend({
        user: belongsTo(),
    }),
    task: Model,
    project: Model,
    label: Model,
    notification: Model,
    account: Model,
    request: Model,
};