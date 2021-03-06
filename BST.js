class Tree {
    constructor() {
        this.root = null;
    }

    add(value) {
        if (!this.root) {
            this.root = new Node(value);
            return;
        }

        let current = this.root;

        while (true) {
            if (current.value > value) {
                // go left
                if (current.left) {
                    current = current.left;
                } else {
                    current.left = new Node(value);
                    return;
                }
            }
            else {
                // go right
                if (current.right) {
                    current = current.right;
                } else {
                    current.right = new Node(value);
                    return;
                }
            }
        };

    }
}

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}