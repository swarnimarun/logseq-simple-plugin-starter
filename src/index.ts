import type {} from "@logseq/libs";
import helloworld from './helloworld';

function main() {
  logseq.UI.showMsg(helloworld());
}

// bootstrap
logseq.ready(main).catch(console.error);
