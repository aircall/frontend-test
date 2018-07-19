import moment from 'moment';

function groupByDate(arrayOfObject, key) {
  return arrayOfObject.reduce((groups, item) => {
    const val = moment(item[key]).format('ll');
    const innerGroups = groups;
    innerGroups[val] = groups[val] || [];
    innerGroups[val].push(item);
    return innerGroups;
  }, {});
}

export default groupByDate;
