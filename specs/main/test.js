/**
 * Created by adriancorsini on 03/04/2014.
 */

describe("my module", function(){
    it("answers to myMethod() correctly ", function(){
        var instance = new MyModule();
        expect(instance.myMethod()).toEqual("hello world");
    });
});
