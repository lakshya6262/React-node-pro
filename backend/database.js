const MAX_SIZE = 10000;
const records = [];

function save(record) {
  if (records.length >= MAX_SIZE) records.shift();
  records.push(record);
}

function getAll() {
  return records;
}

module.exports = { save, getAll };
