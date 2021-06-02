import dotenv from 'dotenv';
import BinarySearchTree from './binarySearchTree'
dotenv.config({ path: './../.env' });
var bst = new BinarySearchTree();
const stringArray = process.env.NUMBERS.split(' ');
stringArray.forEach(number => {
    bst.insert(+number);
});

var root = bst.getRootNode();
bst.inorder(root);

bst.remove(5);
var root = bst.getRootNode();
bst.inorder(root);

bst.remove(7);
var root = bst.getRootNode();
bst.inorder(root);
bst.remove(15);

var root = bst.getRootNode();
console.log("inorder traversal");
bst.inorder(root);           
console.log("postorder traversal");
bst.postorder(root);
console.log("preorder traversal");
bst.preorder(root);