//Напишите анотации типов к этому классу.
export class ObjectManipulator {
  constructor(protected obj: any) {}

  public set(key: string, value: number | string | boolean): object {
    return new ObjectManipulator({ ...this.obj, [key]: value });
  }

  public get(key: string): string {
    return this.obj[key];
  }

  public delete(key: string): object {
    const newObj = { ...this.obj };
    delete newObj[key];
    return new ObjectManipulator(newObj);
  }

  public getObject(): object {
    return this.obj;
  }
}
const userX = {
  name: 'Anna',
  lastName: 'Petrova',
  age: 25,
};
const manipulator = new ObjectManipulator(userX);
console.log(manipulator.set('name', 'Maria'));
