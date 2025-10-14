// ============================================================
// update_core.js  (System Core Entry - DO NOT MODIFY)
// ============================================================
import { runAuditCore } from "./audit_core.js";
import { runDiffApply } from "../user/update_diff_apply.js";
import { logInfo, logFail } from "./shared_utils.js";

const args = process.argv.slice(2);
const modeArg = args.find(a => a.startsWith("--mode="));
const mode = modeArg ? modeArg.replace("--mode=", "") : "unknown";

logInfo(`=== update_core.js START (${mode}) ===`);

try {
  await runAuditCore("pre");
  if (mode === "copypaste") {
    logInfo("Copypaste mode → skipping diff apply.");
  } else {
    await runDiffApply(mode);
  }
  await runAuditCore("post");
  logInfo("=== update_core.js END ===");
} catch (err) {
  logFail(`[update_core] ERROR: ${err.message || String(err)}`);
  process.exit(1);
}
