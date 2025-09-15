import { ChartBarStacked, PlusCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";

export default function ActionsData() {
  return (
    <div className="flex items-center space-x-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="default"
            className="flex items-center justify-around bg-blue-800 cursor-pointer"
          >
            <PlusCircle /> Adicionar Usuário
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Test</DialogTitle>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className="flex items-center justify-around cursor-pointer"
          >
            <ChartBarStacked /> Novo Relatório
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Tedee</DialogTitle>
        </DialogContent>
      </Dialog>
    </div>
  );
}
