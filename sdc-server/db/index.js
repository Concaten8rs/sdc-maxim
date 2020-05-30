const cassandra = require('cassandra-driver');

const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1' ,keyspace: 'target_reviews' });
client.connect(function (err) {
  if (err) return console.error(err);
  console.log('Connected to cluster with %d host(s): %j', client.hosts.length, client.hosts.keys());
});