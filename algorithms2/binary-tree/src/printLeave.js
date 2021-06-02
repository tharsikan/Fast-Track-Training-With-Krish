import { BinarySearchTree } from "./binarySearchTree";

export class PrintLeafNodes extends BinarySearchTree{
    printLeafNodes(root){
        if (root == null)
            return;
       
        if (root.left == null &&
            root.right == null){
            console.log(root.data + " ");
            return;
        }
    
        if (root.left != null)
            printLeafNodes(root.left);
    
        if (root.right != null)
            printLeafNodes(root.right);
    }  
}