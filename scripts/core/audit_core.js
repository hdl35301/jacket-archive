// ============================================================
// audit_core.js  (System Audit Core - DO NOT MODIFY)
// ============================================================
import { logInfo } from "./shared_utils.js";
import { runAuditExtend } from "../user/audit_extend.js";

export async function runAuditCore(phase) {
  logInfo(`[audit_core] Running ${phase}-update audit...`);
  await runAuditExtend(phase);
}
