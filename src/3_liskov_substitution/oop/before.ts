/**
 * @module solid_crockford/3_liskov_substitution/oop/before
 */

class Person {
  public add(args: number[]) {
    return this.simple_math(args);
  }

  private simple_math(args: number[]) {
    return args[0] + args[1];
  }
}

/**
 * Customize 'Person' to create
 * 'Employee' which would represent
 * an ideal employee. Especially,
 * they should be good at using Excel.
 * Using 'Employee', we should be able
 * to create 'accountant' instance.
 * 
 * Also, create 'Developer' who is not
 * good at using Excel. Using this,
 * we should be able to create
 * 'developer' instance.
 */
class Employee extends Person {}
