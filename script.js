const testArr = [100, 200, 250, 250, 500, 500, 750, 750, 800, 2000, 6000, 7000];
const testArr2 = ['Adam', 'Eva', 'Krille', 'Rebecka', 'Peter', 'Ida', 'Frans', 'Maximilian']
const testArr3 = { transfer: [{ key: 'currency', value: 'USD' }, { key: 'amount', value: '10000' }, { key: 'timestamp', value: '1582044818312' }] };
const testObj = {};
const testArr4 = [];



/*******************************************************************************************************************************************************
   Det finns ett antal arrayer, testArr med belopp, testArr2 med namn och testArr3 med transaktioner.
   1. Skriv en funktion som tar testArray som argument, och returnerar de fem högsta beloppen.
   2. Skriv en som tar testArr som argument 1 och antal högsta belopp att returnera (som argument 2): getMax (testArray, 3) ska returnera de 3 högsta beloppen.
   3. Skriv motsvarande funktion för att ta ut n lägsta
   4. Skriv en funktion som returnerar antalet namn i testArr2 med ett visst antal bokstäver, t.ex getNames(testArr2, 3) ska returnera 2 (Ida och Eva har 3 bokstäver i sitt namn)
   4. Skriv en funktion som tar testArr3 som argument, och returnerar ett objekt som funktionen bygger och ser ut som:
      {currency: 'USD', amount: 10000, timestamp: 1582044818312}
   5. testObj är tomt i dagsläget. Fyll i properties som du tror att era note-objekt kommer se ut i TP1. Finns allt med?
   6. Gör testArr4 till en array av note-objekt.
   7. Skriv en funktion som returnerar en sorterad array testArr4, sorterad på timestamp (stigande/fallande)
   8.

   För maximal träning, skriv vanliga for-loopar (eller while-loopar) först. Refaktorisera till .forEach, .reduce, .map
   Lycka till och hojta till om du behöver assistans :)

*******************************************************************************************************************************************************/