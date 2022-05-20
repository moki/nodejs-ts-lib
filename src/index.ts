console.log('hello, world!', id('moki'));

hello_sayer('moki');

function id(anything: any) {
  return anything;
}

function hello_sayer(anything: any) {
  console.log(`hello ${anything}`);
}

export {id, hello_sayer};
