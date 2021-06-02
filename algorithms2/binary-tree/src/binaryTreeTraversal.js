import { BinarySearchTree } from "./binarySearchTree";

export class BinaryTreeTraversal extends BinarySearchTree{
    inorder(node){
        if(node !== null){
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    preorder(node){
        if(node !== null){
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    postorder(node){
        if(node !== null){
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }
    printLeafNodes(root){
        if (root == null)
            return;
       
        if (root.left == null &&
            root.right == null){
            System.out.print(root.data + " ");
            return;
        }
    
        if (root.left != null)
            printLeafNodes(root.left);
    
        if (root.right != null)
            printLeafNodes(root.right);
    }  
}