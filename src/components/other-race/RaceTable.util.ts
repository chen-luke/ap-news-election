import type { AllRaceType } from '../../voting-data';

interface RenderReadyRace extends AllRaceType {
  rowSpan: number;
}

const parseTimeWeight = (timeStr: string): number => {
  const clean = timeStr.toLowerCase().replace(/\./g, '').trim();
  let [time, modifier] = clean.split(' ');
  if (!modifier) modifier = 'pm';

  let [hours, minutes] = time.split(':').map(Number);
  if (!minutes) minutes = 0;

  if (modifier === 'pm' && hours !== 12) hours += 12;
  if (modifier === 'am' && hours === 12) hours = 0;

  return hours * 100 + minutes;
};

const getMarginColor = (partyColor: string) => {
  if (partyColor === '#F3BB2D') return '#91701b';
  if (partyColor === '#E06016') return '#86390d';
  if (partyColor === '#16A5A3') return '#0d6361';
  return '#014678';
};

/**
 * Takes a raw list of races and returns a new list with 'rowSpan' attached.
 */
const calcRowSpan = (list: AllRaceType[]): RenderReadyRace[] => {
  return list.map((item, index) => {
    const isCovered = index > 0 && list[index - 1].pollTime === item.pollTime;
    let rowSpan = 0;

    if (!isCovered) {
      let span = 1;
      for (let i = index + 1; i < list.length; i++) {
        if (list[i].pollTime === item.pollTime) {
          span++;
        } else {
          break;
        }
      }
      rowSpan = span;
    }

    return { ...item, rowSpan };
  });
};

export { parseTimeWeight, getMarginColor, calcRowSpan };
export type { RenderReadyRace };
