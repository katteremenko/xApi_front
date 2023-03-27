import Cmi5 from "@xapi/cmi5";

// Create Cmi5 instance
const cmi5: Cmi5 = new Cmi5();
console.log(`cmi5 = `, cmi5)

// Initialize AU
// cmi5.initialize();

export const initAu = () => {
    console.log(`cmi5.initialize(); = `, cmi5.initialize())
    // return cmi5.initialize();
}
