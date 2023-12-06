import { set, connect } from 'mongoose'

const dbUri = 'mongodb://maurobarragan:Mauro2020@ac-6donq2q-shard-00-00.1kzlker.mongodb.net:27017,ac-6donq2q-shard-00-01.1kzlker.mongodb.net:27017,ac-6donq2q-shard-00-02.1kzlker.mongodb.net:27017/?ssl=true&replicaSet=atlas-u9zh2w-shard-0&authSource=admin&retryWrites=true&w=majority'

set('strictQuery', false)

export default () => {
    return connect(dbUri,
        { useNewUrlParser: true, useUnifiedTopology: true })
}