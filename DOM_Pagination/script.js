const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

table.setAttribute('style','border:2px solid black;height:500px;width:500px;')
 const trow = document.createElement('tr');
 const th1 = document.createElement('th');
 const th2 = document.createElement('th');
 const th3 = document.createElement('th');
 th1.textContent= 'id';
 th2.textContent= 'Name';
 th3.textContent= 'E-mail';
 trow.append(th1,th2,th3);
 thead.append(trow);
document.body.append(table);

