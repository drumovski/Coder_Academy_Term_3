

function StationIndexError(message) {
  this.name = 'StationIndexError';
  this.message = message;
//  Your code here to assign the message of the error
}

function getStationAtIndex(index) {
  const trainLines = [
    'Alamein',
    'Belgrave',
    'Craigieburn',
    'Cranbourne',
    'Flemington',
    'Frankston',
    'Glen Waverley',
    'Hurstbridge',
    'Lilydale',
    'Mernda',
    'Pakenham',
    'Sandringham',
    'Stony Point',
    'Sunbury',
    'Upfield',
    'Werribee',
    'Williamstow',
  ];
  try {
    if (index > 16) throw new StationIndexError("That index not found");
  }
  finally {
    console.log("Beepity booper ///////")
  }

  return trainLines[index];

}; 

module.exports = {
  getStationAtIndex,
  StationIndexError
};

