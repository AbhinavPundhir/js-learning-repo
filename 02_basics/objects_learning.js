const target = {a:1, b:2}
const src = {c:3, d:4}

const newObj = Object.assign({}, target, src)
//Object.assign(target, source) this helps us merge a source object with the target object and since we want to merge the source with the target therefore we put an empty {} at the start to make sure all objects gets merged as we want, this is a production level practice we should keep in mind.
console.log(newObj);


//second way is using the spread operator concept. These 3 dots are the spread operator.
const Obj = {...target, ...src}
console.log(Obj);

